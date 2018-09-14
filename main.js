let h = React.createElement
let d = ReactDOM.render

let NavBar = () =>
    <div className="navBar">
        <div className="navLink">About Flutter</div>
        <div className="navLink">Post Flutter</div>
    </div>

let HeadLogo = () =>
    <div className="logoFlex">
        <img className="headLogo" src="images/flutter.png"/>
        <div className="headText">Flutter</div>
    </div>

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
        return (<form className="flexColumn newFlutterBox" onSubmit={(event) => {
            event.preventDefault();
            return this.state.submit('Jaydoe', 'images/MillionsKnives.png', this.state.newFlutter);
            }}>
            <textarea placeholder="255max" className="postType" value={this.state.newFlutter} onChange={
                (event) => this.setState({newFlutter: event.target.value})
            }/>
            <input type="submit" className="submitBtn"/>
        </form>)
    }
}  



let Flutter = (props) =>
    <div className="flutter">
        <div className="logoFlex mZero jStart">
            <img className="iconImg" src={props.icon} />
            <div className="postText">
                <div>{props.username}</div>
                <div>Fluttered</div>
            </div>
        </div>
        <p>{props.content}</p>
    </div>

let PostList = (props) => 
    <div className="postArea">
        {props.postList.map(post => 
            <Flutter username={post.username} icon={post.profileImg} content={post.post} key={post.postID}/>
        )}
    </div>

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

        return <div className="flexColumn">
            <NavBar/>
            <HeadLogo/>
            <NewPost submitFlutter={submitFlutter}/>
            <PostList postList={this.state.postList.reverse()}/>
        </div>
    }
}

let initRender = () => d(h(FlutterHome), document.getElementById('main'));
initRender();