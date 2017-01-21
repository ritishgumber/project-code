import React from 'react';
import NavBar from '../containers/nav';
import SideBar from '../containers/sidebar';
import MainBody from '../containers/mainbody';
import axios from 'axios';
import {initApp} from '../actions/index';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {Row, Grid, Col, Glyphicon} from 'react-bootstrap';

const d = {
    position: "fixed"
};
class App extends React.Component {
    constructor(props)
    {
        super(props);
        //console.log(this.props.location);
        console.log();
        this.props.initApp('' + window.location.hash.split('/')[1]);
        this.state = {
            scroll: {}
        };

    }

    render() {

        return (

            <div class="container">

                <nav class="navbar navbar-style navbar-fixed-top ">
                    <div class="container navbar-border">
                        <div class="navbar-header">
                            <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                                <img src="https://cfl.dropboxstatic.com/static/images/avatar/faceholder-32-vflKWtuU5.png" class="profile-photo" width='24px'/>
                            </button>
                            <a class="navbar-brand logo" href="#"><img id="logo" src="./assets/cblogo.png" width="40px"/></a>
                        </div>
                        <div class="collapse navbar-collapse" id="myNavbar">

                            <ul class="nav navbar-nav navbar-right">

                                <li>
                                    <a href="https://tutorials.cloudboost.io/en/datastorage/files#" target="_blank" class="header-elements" id="remove-hover-bg">
                                        &nbsp;Documentation
                                    </a>
                                </li>
                                <li>
                                    <a href="#" class="header-elements" id="remove-hover-bg">
                                        <img src="https://cfl.dropboxstatic.com/static/images/avatar/faceholder-32-vflKWtuU5.png" class="profile-photo" width='24px'/>
                                        &nbsp;My Profile
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>

                <div class="container">
                    <h3>&nbsp;</h3>
                    <div className="row">
                        <div className="col-sm-2 col-xs-2 col-md-2">
                            <SideBar location={this.props.location}/>
                        </div>
                        <div className="col-sm-10 col-xs-10 col-md-10 container-fluid">
                            {this.props.children}
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {fetching: state.documents.fetching, fileAddSuccess: state.documents.fileAddSuccess};
}
function matchDispatchToProps(dispatch) {
    return bindActionCreators({
        initApp,
        initApp
    }, dispatch);
}
export default connect(mapStateToProps, matchDispatchToProps)(App);
