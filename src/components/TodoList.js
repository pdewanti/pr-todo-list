import React from 'react'

class TodoList extends React.Component {

    render() {
        return (

            <div className="container">


                <form onSubmit={this.props.addItem}>
                    <div className="input-group mb-3">
                        <input type="text" className="form-control" 
                        placeholder="Task"
                            ref={this.props.inputElement}
                            value={this.props.currentItem.text}
                            onChange={this.props.handleInput} />
                        <div className="input-group-append">
                            <button type="submit" className="btn btn-primary"  id="button-addon2">Add todo</button>
                        </div>
                    </div>


                    {/* <input
                        className="form-control"
                        placeholder="Task"
                        ref={this.props.inputElement}
                        value={this.props.currentItem.text}
                        onChange={this.props.handleInput}
                    />
                    <button type="submit"> Add Task </button> */}

                </form>

            </div>
        )
    }
}
export default TodoList