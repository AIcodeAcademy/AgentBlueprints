# TaskList System Components

## Components

### Front-end: 
- A web app client only.
- Typescript with no framework.

### Back-end: 
- No back-end. Only a static file server.
 
### Database: 
- To store tasks.
- Local storage.

### Server: 
- Local 

### Authentication: 
- No authentication.

### CI/CD: 
- Test with playwright.

### Third-party integrations: 
- None.

## Diagram

```mermaid
C4Container
    Person(user, "User", "A person who needs to manage their tasks")
    
    Container_Boundary(browser, "Web Browser") {
        Container(webapp, "TaskList Web Application", "TypeScript", "Provides task management functionality through the browser")
        ContainerDb(localStorage, "Local Storage", "Browser Storage", "Stores task data locally in the browser")
    }
    
    Container(static_server, "Static File Server", "Local Server", "Serves the static web files")

    Rel(user, webapp, "Views and manages tasks using")
    Rel(webapp, localStorage, "Reads from and writes to")
    Rel(static_server, webapp, "Delivers to browser")
    Rel(user, static_server, "Requests web application from")
```
