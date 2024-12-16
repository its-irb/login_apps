from flask import Flask, render_template, request
import subprocess
import json
from datetime import datetime, timedelta
from intspan import intspan

MyApp = Flask(__name__)

@MyApp.route("/")
def hello():
    return "flask backend"

@MyApp.route("/jobs")
def jobs():
    endDate = datetime.strptime(request.args.get('end'),"%Y-%m-%d")
    startDate = endDate - timedelta(weeks=1)
    result = json.loads(subprocess.run(['sacct', '-X', '--starttime', startDate.strftime("%Y-%m-%d"), '--endtime', endDate.strftime("%Y-%m-%d"), '--format', 'JobID', '--json'], stdout=subprocess.PIPE).stdout.decode())
    return result["jobs"]

@MyApp.route("/job", methods=['GET'])
def job():
    jobId = request.args.get('jobId')
    result = json.loads(subprocess.run(['sacct', '-X', '--jobs', jobId, '--format', 'JobID,start,end', '--json'], stdout=subprocess.PIPE).stdout.decode())
    for i in range(len(result["jobs"])):
        if result["jobs"][i]["nodes"][6] == "[":
            result["jobs"][i]["nodes"] = ["{0:s}{1:02d}".format(result["jobs"][i]["nodes"][:6],n) for n in intspan(result["jobs"][i]["nodes"][7:-1])]
        else:
            result["jobs"][i]["nodes"] = [result["jobs"][i]["nodes"]]
    return result["jobs"]

@MyApp.route("/partitions")
def partitions():
    result = json.dumps(subprocess.run(['sinfo', '-h', '-o', '%R'], stdout=subprocess.PIPE).stdout.decode().splitlines())
    return result


if __name__ == "__main__":
	MyApp.run()
