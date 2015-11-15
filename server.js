var azure = require('azure-storage');
var tableSvc = azure.createTableService();

tableSvc.createTableIfNotExists('mytable', function(error, result, response) {
    if(!error) {
        // Table exists or created
    }
});
