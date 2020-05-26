import React, {Component} from  'react'
import { Form } from 'react-bootstrap'
import { Button } from 'react-bootstrap'

import Header from '../../components/Header'

export default class Hola extends Component {
  render() {
    return (
      <div className='container'>
        <Header />
        Hola desde newPost
        </div>
    )
  }
}
