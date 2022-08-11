import * as pubSub from './pubsub';

const display = (function() {
    const init = (function() {
        pubSub.subscribe('projectAdded', data => showMessage(`Project added: ${data.projectName}`));
        pubSub.subscribe('projectDeleted', data => showMessage(`Project deleted: ${data.projectName}`));        
    })();

    function showMessage(message) {
        console.log(`EVENT MESSAGE: ${message}`);
    }

    return {
        showMessage,
    };
})();

export { display };