import React from 'react';

class Hello extends React.Component {
    render() {
        return (
            <div>
                <p> Hello {this.props.name}</p>
            </div>
        );
    }
}
expport default Hello;