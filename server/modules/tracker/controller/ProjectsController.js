var ProjectsProvider = require('../provider/ProjectsProvider');

module.exports = ProjectsController();

function ProjectsController() {
    return {
        addProject: addProject,
        getProject: getProject,
        getProjects: getProjects,
        updateProject: updateProject,
        deleteProject: deleteProject
    }

    function addProject(req, res, next) {
        ProjectsProvider.addProject(req.body).then(function(result) {
            res.json(result);
        }).catch(function(err) {
            res.status(500).send(err);
        });
    }

    function getProject(req, res, next) {
    console.log('Reaching Controller')
        
        ProjectsProvider.getProject(req.params.id).then(function(result) {
            res.json(result);
        }).catch(function(err) {
            res.status(500).send(err);
        });
    }

    function getProjects(req, res, next) {
        console.log('Getting Projects')
        ProjectsProvider.getProjects().then(function(result) {
            res.json(result);
        }).catch(function(err) {
            res.status(500).send(err);
        });
    }

    function updateProject(req, res, next) {
        ProjectsProvider.updateProject(req.body).then(function(result){
          console.log(result);
          res.json(result);
        }).catch(function(err){
          res.status(500).send(err);
        });
    }

    function deleteProject(req, res, next){
      console.log('Deleting project number ', req.params.id);
      ProjectsProvider.deleteProject(req.params.id).then(function(result){
        console.log(result);
        res.json(result);
      }).catch(function(err){
        res.status(500).send(err);
      });
    }
}
