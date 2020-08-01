import React, {Fragment} from "react";
import store from "../store";
import {delCompanyAction, addCompanyAction, changeWordAction, getCompanyAction} from '../store/actionCreators'
import CompanyUI from './CompanyUI'
import {connect} from 'react-redux'

class CompanyDemo extends React.Component {

    componentDidMount() {
        const action = getCompanyAction();
        store.dispatch(action)
    }

    render() {
        return (
            <Fragment>
                <CompanyUI changeWord={this.props.changeWord} word={this.props.word} addCompany={this.props.addCompany}
                           companies={this.props.companies} delCompany={this.props.delCompany}/>
            </Fragment>
        )
    }
}

const stateToProps = (state) => {
    return {
        word: state.word,
        companies: state.companies
    }
};

const dispatchToProps = (dispatch) => {
    return {
        changeWord(e) {
            const action = changeWordAction(e.target.value);
            store.dispatch(action);
        },
        addCompany() {
            const action = addCompanyAction();
            store.dispatch(action)
        },
        delCompany(index) {
            const action = delCompanyAction(index);
            store.dispatch(action)
        }

    }
};

export default connect(stateToProps, dispatchToProps)(CompanyDemo);




