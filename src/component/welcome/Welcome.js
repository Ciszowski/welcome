import React, { PureComponent } from 'react';
import { 
    Container
} from '@mui/material';
import CardTemplate from '../../templates/CardTemplate';
import DialogTemplate from '../../templates/DialogTemplate';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as action from '../../reducers/actions/welcomeAction'
import PropTypes from 'prop-types';

const propTypes = {
    presentation: PropTypes.object,
    modals: PropTypes.object,
    dispatch: PropTypes.func.isRequired,
    status: PropTypes.string
}
  
const defaultProps = {
    presentation: {},
    modals: {},
    status: ''
}

class Welcome extends PureComponent
{

    componentDidMount()
    {
        const actions = bindActionCreators(action, this.props.dispatch);
        actions.welcomeAction();
    }

    render()
    {
        if (this.props.status === "DONE")
        {
            return(
                <Container maxWidth="lg" className="welcome-container">
                    <CardTemplate props={this.props.presentation.header}/>
                    <DialogTemplate props={this.props.modals.welcome} />
                    {
                        Object.values(this.props.presentation.main).map((item, key) =>{
                            return (
                                <CardTemplate props={item} key={key} />
                            )
                        })
                    }
                    <CardTemplate props={this.props.presentation.footer}/>
                    <DialogTemplate props={this.props.modals.welcome} />
                </Container>
            )
        }
    }
}
Welcome.propTypes = propTypes
Welcome.defaultProps = defaultProps

const mapStateToProps = state => ({
    presentation : state.welcomeRX.presentation,
    modals : state.welcomeRX.modals,
    status : state.welcomeRX.status
})

export default connect(
    mapStateToProps
)(Welcome)