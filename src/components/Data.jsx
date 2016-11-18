import React, { Component } from 'react';
import reactMixin                      from 'react-mixin';
import { ListenerMixin }               from 'reflux';
import Mozaik                          from 'mozaik/browser';

//export default React.createClass(

class Data extends Component {
    constructor(props) {
        super(props);

        this.state = { issue_count: null };
    }

    getInitialState() {
        return {
            issue_count: null
        };
    }

    getApiRequest() {
        return {
          id: 'json.data',
          params: {
            issue_count: this.props.issue_count
          }
        };
    }

    onApiData(data) {
        this.setState({issue_count: data.req });
    }

    render() {
        var title = "unknown", value = "unknown", unit = null;
        if (this.state.issue_count){
            issue_count = this.state.issue_count;
        }

        return (
            <div>{issue_count}</div>
        );
    }
}

reactMixin(Data.prototype, ListenerMixin);
reactMixin(Data.prototype, Mozaik.Mixin.ApiConsumer);

export default Data
