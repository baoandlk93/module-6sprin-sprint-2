import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

class TableRow extends Component {
    constructor(props) {
        super(props);
        this.delete = this.delete.bind(this);
    }


    delete() {
        axios.delete('http://localhost:3001/persons/' + this.props.obj.id)
            .then(
                console.log('Deleted'),
                // window.location.reload()
            )
            .catch(err => console.log(err))

    }

    render() {
        return (
            <tr>
                <td>
                    {this.props.obj.id}
                </td>
                <td>
                    {this.props.obj.name}
                </td>
                <td>
                    {this.props.obj.company}
                </td>
                <td>
                    {this.props.obj.age}
                </td>
                <td>
                    <Link to={"/edit/" + this.props.obj.id} className="btn btn-primary">Edit</Link>
                </td>
                <td>
                    <button onClick={this.delete} className="btn btn-danger">Delete</button>
                </td>
            </tr>
        );
    }
}

export default TableRow;
