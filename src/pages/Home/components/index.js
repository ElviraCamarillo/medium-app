import React, { Component } from 'react'
import Header from '../../../components/Header'
import RecentPosts from '../../../components/RecentPosts'
import ListPost from '../../ListPost'

export default class Home extends Component {
    render() {
        return (
            <div className='container'>
                <Header/>
                <RecentPosts/>
                <ListPost/>
            </div>
        )
    }
}
