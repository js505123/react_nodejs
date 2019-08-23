import React from 'react'

class Sub extends React.Component{
    render() {
        return (
            <div>
                {this.props.id}
                {this.props.title}
                {this.props.text}
            </div>
        );
    }

}

export default Sub;