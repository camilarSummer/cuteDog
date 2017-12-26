import React, {Component} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'

import CreationList from '../pages/creation/list'
import * as creationActions from '../actions/creation'


class creationContainer extends React.Component {
    constructor (props) {
        super(props)
    }

    componentDidMount(){
        // this.props.()
    }

    render(){
        return (
            <CreationList
                {...this.props}
            />
        )
    }

}

function mapStateToProps(state) {
    const {
        user
    }=state.get('app')
    const {
        isRefreshing,
        isLoadingTail,
        videoList,
        videoTotal,
        page
    } = state.get('creation')

    return {
        isRefreshing,
        isLoadingTail,
        videoList,
        videoTotal,
        page,
        user
    }


}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(creationActions,dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps)(CreationList)