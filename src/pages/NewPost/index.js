import React, {Component} from  'react'
import { Button } from 'react-bootstrap'

import Header from '../../components/Header'

export default class Hola extends Component {
  render() {
    return (
      <div className='container'>
        <Header />
        Hola new post
      </div>
    )
  }
}
