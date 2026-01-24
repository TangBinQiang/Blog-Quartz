```mermaid
flowchart TB
    subgraph Todo
        A[Create Documentation]
        B[Create Blog about the new diagram]
    end
    
    subgraph "In progress"
        C[Create renderer so that it works in all cases]
    end
    
    subgraph "Ready for deploy"
        D[Design grammar]
    end
    
    subgraph "Ready for test"
        E[Create parsing tests]
        F[last item]
    end
    
    subgraph Done
        G[define getData]
        H[Title of diagram is more than 100 chars]
        I[Update DB function]
    end
    
    subgraph "Can't reproduce"
        J[Weird flickering in Firefox]
    end
```


```mermaid
flowchart LR
    subgraph Todo
        A[Create Documentation]
        B[Create Blog about the new diagram]
    end
    
    subgraph InProgress["In progress"]
        C[Create renderer so that it works in all cases]
    end
    
    subgraph ReadyDeploy["Ready for deploy"]
        D[Design grammar<br/>assigned: knsv]
    end
    
    subgraph ReadyTest["Ready for test"]
        E[Create parsing tests<br/>ticket: 2038<br/>assigned: K.Sveidqvist<br/>priority: High]
        F[last item<br/>priority: Very Low<br/>assigned: knsv]
    end
    
    subgraph Done
        G[define getData]
        H[Title of diagram is more than 100 chars<br/>ticket: 2036<br/>priority: Very High]
        I[Update DB function<br/>ticket: 2037<br/>assigned: knsv<br/>priority: High]
    end
    
    subgraph CantReproduce["Can't reproduce"]
        J[Weird flickering in Firefox]
    end
    
    Todo --> InProgress --> ReadyDeploy --> ReadyTest --> Done
    ReadyTest --> CantReproduce
```