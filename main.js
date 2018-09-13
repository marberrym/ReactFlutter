let h = React.createElement
let d = ReactDOM.render

let NavBar = () => 
    h('div', {className: 'navBar'}, 
        h('div', {className: 'navLink'}, 'About Flutter'),
        h('div', {className: 'navLink'}, 'Post'),
    )

let HeadLogo = () =>
    h('div', {className: 'logoFlex'}, 
        h('img', {className: 'headLogo', src: 'images/flutter.png'}),
        h('div', {className: 'headText'}, 'Flutter')
    )

class NewPost extends React.Component {
    constructor(props) {
        console.log(props)
        super(props);
        this.state = {
            newFlutter: '',
            submit: props.submitFlutter
        }
    }
    render() {
        return h('form', {className: 'flexColumn', onSubmit: (event) => {
            event.preventDefault(),
            this.state.submit('Jaydoe', 'images/MillionsKnives.png', this.state.newFlutter)
            }}, 
            h('textarea', {className: 'postType', value: this.state.newFlutter, onChange: (event) => this.setState({newFlutter: event.target.value})}),
            h('input', {type: 'submit', className: 'submitBtn', }),
        )
    }
}  



let Flutter = (props) =>
    h('div', {}, 
        h('div', {}, 
            h('img', {className: 'iconImg', src: props.icon}),
            h('div', {}, props.username),
        ),
        h('p', {}, props.content)
    )

let PostList = (props) => 
    h('div', {className: 'flexColumn'}, [
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
        let generateId = () =>
            Math.floor(Math.random() * Number.MAX_SAFE_INTEGER).toString();

        let submitFlutter = (username, icon, post) => {
            console.log("submitting")
            this.setState({postList: this.state.postList.concat([{"username": username,
            "profileImg": icon,
            "post": post,
            "postID": generateId()}])});
        }

        return h('div', {}, 
            h(NavBar),
            h(HeadLogo),
            h(NewPost, {submitFlutter}),
            h(PostList, {postList: this.state.postList})
        )
    }
}

let initRender = () => d(h(FlutterHome), document.getElementById('main'));
initRender();