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

let NewPost = (props) =>
    (<form className="flexColumn newFlutterBox" onSubmit={(event) => {
        event.preventDefault();
        props.update('');
        return props.submit('Jaydoe', 'images/MillionsKnives.png', props.newFlutter);
        }}>
        <textarea placeholder="255max" className="postType" value={props.newFlutter} onChange={
            (event) =>  props.update(event.target.value)
        }/>
        <input type="submit" className="submitBtn"/>
    </form>)

class NewPostContainer extends React.Component {
    constructor(props) {
        console.log(props)
        super(props);
        this.state = {
            newFlutter: '',
            submit: props.submitFlutter
        }
    }
    render() {
        let updateNewFlutter = (string) =>
            this.setState({newFlutter: string})

        return <NewPost {...this.state} update={updateNewFlutter}/>
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

let Home = (props) => 
    <div className="flexColumn">
        <NavBar/>
        <HeadLogo/>
        <NewPostContainer submitFlutter={props.submitFlutter}/>
        <PostList postList={props.postList.reverse()}/>
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

        return <Home {...this.state} submitFlutter={submitFlutter}/>
    }
}



let initRender = () => d(<FlutterHome />, document.getElementById('main'));
initRender();