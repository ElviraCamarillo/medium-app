import React, { Component } from 'react'
import LeftCard from '../LeftCard'
import ItemCard from '../ItemCard'
import RightCard from '../RightCard'

import imgCardLeft from '../../img/guys.jpeg'
import imgCardRight from '../../img/imgCardRight.jpeg'
import imgCard1 from '../../img/imgCard1.jpeg'
import imgCard2 from '../../img/imgCard2.jpeg'
import imgCard3 from '../../img/imgCard3.jpeg'

class RecentPosts extends Component {
  constructor(props) {
    super(props)
    this.state = {
      dataItemCard: [
          {
              img: imgCard1,
              title: 'Don’t Let #Quarantinspo Stress You Out',
              author: 'Michelle Woo',
              company: 'Forge',
              readTime: '4 min read'
          },
          {
              img: imgCard2,
              title: 'A Taxonomy of Online Pandemic Archetypes',
              author: 'Kelli María',
              company: 'Forged',
              readTime: '2 min read'
          },
          {
              img: imgCard3,
              title: 'Use the ‘Circle of Concern’ to Reframe Your Fears in Uncertain Times...',
              author: 'Brian Pennieo',
              company: 'Forgey',
              readTime: '5 min read'
          }
      ],
      imgCardRight: imgCardRight,
      imgCardLeft: imgCardLeft
    }
  }

  render() {
      const { dataItemCard, imgCardRight, imgCardLeft } = this.state
      return (
          <>
              <div className="row container--medium">
                  <div className="col-12 col-md-6 col-xl-5 p-2">
                      <LeftCard imgCardLeft = { imgCardLeft }/>
                  </div>
                  <div className="col-12 col-md-6 col-xl-4 d-none d-md-block px-2">
                      { dataItemCard.map((itemInfo) => (
                          <ItemCard
                          img = {itemInfo.img}
                          title = {itemInfo.title}
                          author = {itemInfo.author}
                          company = {itemInfo.company}
                          readTime = {itemInfo.readTime}
                          />
                      )) }
                  </div>
                  <div className="d-none d-xl-block col-xl-3">
                      <RightCard imgCardRight = { imgCardRight }/>
                  </div>
                  <div className="col-12 d-flex flex-column btn-see-editors">
                      <a className="align-self-lg-end">SEE EDITOR'S PICK &#x205f;&#x205f;&#x276d;</a>
                  </div>
                  <hr className="hr-footer align-self-center my-4"/>
              </div>
          </>
      )
  }
}

export default RecentPosts;