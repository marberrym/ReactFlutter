let h = React.createElement
let d = ReactDOM.render

let NavBar = () => 
    h('div', {className: 'navBar'}, [
        h('div', {className: 'navLink'}, 'About Flutter'),
        h('div', {className: 'navLink'}, 'Post'),
    ])

let HeadLogo = () =>
    h('div', {className: 'logoFlex'}, [
        h('img', {className: 'headLogo', src: 'images/flutter.png'}),
        h('div', {className: 'headText'}, 'Flutter')
    ])

let NewPost = () => 
    h('form', {className: 'flexColumn'}, [
        h('textarea', {className: 'postType'}),
        h('button', {className: 'submitBtn'}, 'Post Flutter'),
    ])

let Flutter = (props) =>
    h('div', {}, [
        h('div', {}, [
            h('img', {className: 'iconImg', src: props.icon}),
            h('div', {}, props.username),
        ]),
        h('p', {}, props.content)
    ])

let PostList = (props) => 
    h('div', {}, [
        props.postList.map(post => {
            console.log(post)
            return h(Flutter, {username: post.username, icon: post.profileImg, content: post.post, key: post.postID})
        })
    ])

class FlutterHome extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            postList: [
                {
                    "username": "Jaydoe",
                    "profileImg": "images/MillionsKnives.png",
                    "post": "I love coffee and anime.",
                    "postID": 1
                },
                {
                    "username": "Jaydoe",
                    "profileImg": "images/MillionsKnives.png",
                    "post": "I love coffee and anime.",
                    "postID": 2
                },
                {
                    "username": "Jaydoe",
                    "profileImg": "images/MillionsKnives.png",
                    "post": "I love coffee and anime.",
                    "postID": 3
                },
            ]
        }
    }
    render() {
        return h('div', {}, [
            h(NavBar),
            h(HeadLogo),
            h(NewPost),
            h(PostList, {postList: this.state.postList})
        ])
    }
}

let initRender = () => d(h(FlutterHome), document.getElementById('main'));
initRender();