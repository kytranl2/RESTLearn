
# Containerized Express application with docker


Express is a minimal flexible Node.js web application framework.

Key Features:

- Express runs within a Node.js environment, allowing developers to write server-side logic in JavaScript.

- Middleware: Express uses a middleware model to enhance and compose web server functionality. Middleware functions can execute code, make changes to the request and response objects, end the request-response cycle, and call the next middleware function.

- Routing: Express provides a powerful set of routing capabilities to control how an application responds to clients based on the URL and HTTP method.

- Simplicity and Flexibility: With Express, you can structure your application as you see fit. There's no strict enforcement of how to organize your app, giving you the freedom to choose the most suitable architecture for your project.
***
## Kubernetes 
Kubernetes, often abbreviated as K8s, is an open-source platform designed to automate deploying, scaling, and operating application containers. It was originally developed by Google and is now maintained by the Cloud Native Computing Foundation. Kubernetes simplifies the management of containerized applications, making it easier to implement cloud-native strategies in a robust, efficient manner.

In a Kubernetes environment, various resources such as **pods**, **services**, and **nodes** each have their own IP addresses, which are crucial for internal and external communications:
- **pods**: Each pod is assigned a unique IP address from the cluster's internal network, IP addresses like 10.244.2.4 are typically private to the cluster.
- **services**: provide a static IP address and load balancing for a set of **pods**. Service have a fixed IP address while managing dynamic IP addresses of pods.
  ```
       NAME         TYPE        CLUSTER-IP    EXTERNAL-IP   PORT(S)          AGE
       kubernetes   ClusterIP   10.96.0.1     <none>        443/TCP          10d
       web-service  NodePort    10.96.0.200   <none>        8080:30007/TCP   75m
  ```
  
      The ClusterIP type services, which are only reachable within the cluster.
      web-service has a cluster IP of 10.96.0.200, accessible internally at port 8080.
      No EXTERNAL-IP is assigned to web-service as it is of type NodePort, not LoadBalancer.
  
- **node**: Each node has an internal IP used within the Kubernetes cluster network and possibly an external IP if accessible outside the network.



## Commands 
run `npm install`

In express-example folder, run `node [name].js` 

### Curl commands in CMD:

server.js 

```
curl -X POST http://localhost:3000/items -H "Content-Type: application/json" -d "{\"id\": 1, \"name\": \"Item 1\"}"
```
```
curl http://localhost:3000/items
```

middlewareDemo.js 

```
curl -X POST http://localhost:3000/api/protected -H "Content-Type: application/json" -d "{\"name\": \"John\"}"
```
```
curl -X POST http://localhost:3000/api/protected -H "Content-Type: application/json" -H "Authorization: Basic wrongcredentials" -d "{\"name\": \"John\"}"
```
```
curl -X POST http://localhost:3000/api/protected -H "Content-Type: application/json" -H "Authorization: Basic YWRtaW46cGFzc3dvcmQ=" -d "{\"name\": \"John\"}"
```
### Curl commands in Bash: 

middlewareDemo.js 
```
curl -X POST http://localhost:4200/api/protected -H "Content-Type: application/json" -d '{"name": "John"}'
```
```
curl -X POST http://localhost:4200/api/protected -H "Content-Type: application/json" -H "Authorization: Basic YWRtaW46cGFzc3dvcmQ=" -d '{"name": "John"}'
```
### Docker commands
```
docker login 
```
```
docker build -t [yourusername]/my-express-app .
```
```
docker pull [yourusername]/my-express-app:latest
```
```
docker run -p 4200:3000 my-express-app
```
```
docker stop [imageId] 
```
```
docker push [yourusername]/my-express-app 
```

For building the images in armv7(Raspberry Pi 4) architecture

```
docker buildx build --platform linux/arm/v7 -t username/appname:latest . --load
```
### Kubectl commands 

```
kubectl apply -f service.yaml
```
List all pods along with their IP addresses use:
``` 
kubectl get pods -o wide
```
List cluster IP of each service, which is the internal IP by which the service is accessible within the cluster, along with any external IP if exposed externally:
```
kubectl get services
```
List all nodes with their IPs
```
kubectl get nodes -o wide
``` 
