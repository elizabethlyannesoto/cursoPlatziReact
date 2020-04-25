import React from 'react';

class BadgesList extends React.Component{
    render(){
        return (
            <ul className="list-unstyled BadgesList">
                {this.props.batges.map((badge) => {
                        return(
                            <li key={badge.id}>
                                <div className="container">
                                    <div className="row BadgesListItem">
                                        <div className="col-2 contenedorList">
                                            <img className="BadgesListItem__avatar" src="https://s.gravatar.com/avatar/9b44ce3fd90b33ce0633d780e8d3dde9?s=80" alt="Avatar" />
                                        </div>
                                        <div className="col-10">
                                            <p> {badge.firstName}{badge.lastName}</p>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        )
                    }
                )}
            </ul>
        ); 
    }
}

export default BadgesList;
