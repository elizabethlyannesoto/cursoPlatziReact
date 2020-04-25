import React from 'react';

import './styles/BadgeNew.css';
import header from '../images/badge-header.svg';
import Badge from '../components/Badge';
import BadgeForm from '../components/BadgeForm'
import Navbar from '../components/Navbar';

class BadgeNew extends React.Component{
    state = { form: {
        firstName:'',
        lastName:'',
        email:'',
        jobTitle:'',
        twitter:'',
    } };

    hendleChange = ev =>{
        //const nextForm = this.state.form;
        //nextForm [ev.target.name] = ev.target.value;
        this.setState({
            //form: nextForm, 
            form: {//LEVANTAMIENTO DE ESTADOS
                ...this.state.form,
                [ev.target.name]: ev.target.value,
            },
        });
    }

    render(){
        return (
            <div>
                <Navbar />
                <div className="BadgeNew__hero">
                    <img className="img-fluid" src={header} alt="Logo" />
                </div>

                <div className="container">   
                    <div className="row">
                        <div className="col">
                            <Badge
                                firstName={this.state.form.firstName}
                                lastName={this.state.form.lastName}
                                twitter={this.state.form.twitter}
                                jobTitle={this.state.form.jobTitle}
                                email={this.state.form.email }
                                avatarURL="https://s.gravatar.com/avatar/9b44ce3fd90b33ce0633d780e8d3dde9?s=80"
                            />
                        </div>
                        <div className="row">
                            <div className="col">
                                    <BadgeForm onChange={this.hendleChange} formValues={this.state.form}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default BadgeNew;