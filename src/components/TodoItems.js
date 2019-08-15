import React from 'react'


class TodoItems extends React.Component {
  createTasks(item) {
    return <li key={item.key}>{item.text}</li>
  }

  createTasks = item => {
    return (

      <div className="container">
        <ul className="list-group">
          <li className="list-group-item d-flex justify-content-between align-items-center" key={item.key} >
            {item.text}


            <input className="btn btn-primary" type="button" value="Delete" onClick={() => this.props.deleteItem(item.key)} />
          </li>
        </ul>
      </div>

    )
  }



  render() {
    const todoEntries = this.props.entries
    const listItems = todoEntries.map(this.createTasks)

    return <ul className="theList">{listItems}</ul>
  }
}


export default TodoItems