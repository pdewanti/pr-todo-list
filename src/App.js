import React from 'react'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import TodoList from './components/TodoList'
import TodoItems from './components/TodoItems'
import Header from './components/header'
import Footer from './components/footer'


class App extends React.Component {

  constructor() {
    super()
    this.state = {
      currentItem: { text: '', key: '' },
      items: [],

    }
  }

  handleInput = e => {
    const itemText = e.target.value
    const currentItem = { text: itemText, key: Date.now() }
    this.setState({
      currentItem
    })
  }

  addItem = e => {
    e.preventDefault()
    const newItem = this.state.currentItem
    if (newItem.text !== '') {
      console.log(newItem)
      const items = [...this.state.items, newItem]
      this.setState({
        items: items,
        currentItem: { text: '', key: '' }
      })
    }
  }

  createTasks = item => {
    return (
      <li key={item.key} onClick={() => this.props.deleteItem(item.key)}>
        {item.text}
      </li>
    )
  }

  deleteItem = key => {
    const filteredItems = this.state.items.filter(item => {
      return item.key !== key
    })
    this.setState({
      items: filteredItems,
    })
  }



    render() {
      return (
        <div className='App'>
          <Header />

          <TodoList
            addItem={this.addItem}
            inputElement={this.inputElement}
            handleInput={this.handleInput}
            currentItem={this.state.currentItem}

          />

          <TodoItems entries={this.state.items} deleteItem = {this.deleteItem}/>


          <Footer />

        </div>



      )
    }
  }

  export default App;

