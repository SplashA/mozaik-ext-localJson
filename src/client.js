import request from 'superagent-bluebird-promise';
import config  from './config';
import chalk   from 'chalk';
import promise from 'bluebird';
/**
 * @param {Mozaik} mozaik
 */
const client = function (mozaik) {

    mozaik.loadApiConfig(config);

    function buildApiRequest() {
        let url = config.get('json.url');
        fs = require('fs');
        fs.readFile(url, 'utf-8', function (err,data) {
            if (err) {
                return console.log(err);
            }
            var result = JSON.parse(data);
            let issue_count = result['issue_count'];
        });

        return promie.resolve({ issue_count })
    }
};

export default client;
