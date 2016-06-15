##Singleton Pattern

- only one instance
- in nodejs we can use commonjs
- in angular we already have services for this
- all services are singleton
- app.service calls new for creating a service.
- executing function during export will create a singleton pattern by default (or simply export like this module.export = new Repo)