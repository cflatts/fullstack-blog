import React from 'react'
import Header from './header'

const SingleView = React.createClass ({
    render: function() {
        return (
            <div className = 'singleView'>
                <Header />
                <DetailView />
            </div>
            )
    }
})

const DetailView = React.createClass ({
    render: function() {
        return (
            <div className = 'singleBody'>
                <div className = 'singleTitle'>Title</div>
                <div className = 'singleContent'>Full Post</div>
            </div>
            )
    }
})

export default SingleView