# docker_and_node_perCPU
two apps - for docker and node - both per_cpu monitors

one app monitors the other

build and run docker app using:
docker run -it --cpuset-cpus="3" -p 3005:3005 cpu-stats5
//set which cpu to use between ""

when running, get containerID

edit containerID in curlcall2.js in for_node

start curlcall2

view each cpu monitor app in seperate browsers

note:
cpu-stats5 runs inside docker container but refernces all cpu cors for host machine
curlcall2 runs outside docker container but creates socket to docker container and
returns which cpu core is being used and by how much
