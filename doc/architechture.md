# Architechture

```plantuml
@startuml "Workflow"

actor User
agent WebBrowser
node LoadBalance [
    Nginx
]

User -right-> WebBrowser: open web site
WebBrowser -right-> LoadBalance: requests

folder StaticResources {
    folder WebResources [
        - web sites
        - images
        - scripts
    ]
    folder BlogContents
}

LoadBalance --> StaticResources: read and cache static resources

node Server
LoadBalance -right-> Server: read dynamic data

node Elasticsearch
Server --> Elasticsearch: search for contents

Server ..> BlogContents: analyze and store into Elasticsearch

@enduml
```

## Deployment

```plantuml

start
:tag release;
:checkout release sources by CICD;
:test and build package;
:upload package to deployment machine;
if (deploy server) then (Y)
  :set up server;
  :test if it works well;
elseif (deploy web) then (Y)
  :set up web;
  :test if it works well;
elseif (deploy blog contents)
  :upload latest blog contents;
  :trigger server to analyze latest blog contents;
  :store analysis into Elasticsearch;
else (nothing)
endif

end
```
