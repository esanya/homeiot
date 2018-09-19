# Skeleton project for Swagger

to call the put:

curl -H 'Content-Type: application/json' -X PUT -d '{tempvalue: 0, humvalue:33, sensorid: sens11 }' http://localhost:10010/temphum

to call the get:

curl http://127.0.0.1:10010/temphum/sens10
