## what is the react functional component at the end of the day ?? It is just a normal javascript function.

> what is a class Based Component ?? It is basically a normal javascript class only.

> how to create class based component ?? class keyword and then the name of the component what is the name of the class based component, it is UserDetailsClass.To make this a component we will extend, so I will extends React.Component.So this is the way for react to tell that this is a classBased component.this becomes a classBased component

## class UserDetailsClass extends React.Component {}

> Basically this extends React.Component will make React know that this is a class Based Component.So know React will start tracking it.

> Inside the class I will basically have a render method over here,this render method will return a piece of JSX which will be displayed onto the UI.So, render() method will return some piece of JSX.Now if you compare it with the functional component,what is a functional component it is a function that returns some piece of JSX. Similarly class based component is a class which has a render method which returns some piece of JSX.

> A functional component is a function which returns some piece of JSX, a class based component is a class, which extends React.Component and it has a render method that returns some piece of JSX.This is the JSX which will be converted into HTML and rendered onto the webpage

**this react.component is basically a class which is given to us by react and UserDetailsClass is inheriting some properties from it.Basically this React.component is given to us by React.That means We will have to import it from somewhere.Where does this React.Component comes from**

> this React.Component is a class which is there inside "react" (import React from "react").this react package.Component class is there inside the React Package.just like the functional component we will also export our class Based component.

## Let us see How can we pass props to our classBased Component ???? How will I receive props in my classBased component ???

> In this class, we will create a constructor, this class will have a constructor and this constructor will now receive the props => constructor(props){}

> inside this constructor we will also have to use the super(props).

> In the class Based components we get the props inside the constructor we definitely have to use the super(props).it is mandatory to write super(props), if you do'not write super(props) then the console.log(props) will throw an error

**Why it is mandatory to write super(props)**

> How will I use props (name) inside my JSX ??? inside my render function, so over here you will have to do something like {this.props.name}

> You will always have to use a this keyword inside your class, so that this props can be accessed inside my class.

> Whenever the instance of this particular User class is created, a constructor is called, when the constructor is called this props is extracted over here,and now you can use this props anywhere in your code.

> Let us see how we can create the state variables inside our class Based Components.

> Earlier there used to be no hooks and the functional component in React JS.There used to be the old way of creating the state.

> So whenever you create an instance of a class, What do you mean by when you are creating an instance of a class ??? What do you mean by rendering a functional component ???Basically on your webpage, if there is a functional component, it loads right that means you are mounting that function, you are mounting that functional component, you are calling that function, you are invoking that function, you are envoking that functional component,So whenever I say invoking a functional component that means you are loading or mounting that function onto the web page.That is known as mounting or invoking a function.

> Whenever I am saying that you are creating an instance of a class Based component, loading a class based component means that you are creating an instance of this class.When I say that I am loading a class based component on a web page that means I am creating an instance of that class.When I am loading a class based component onto the web page that means I am creating a new instance of this class, and giving it some props.

> Whenever you create an instance of a class this constructor is called,and this is the best place to receive the props and this is also the best way to create the state variables. If you want to create a state variable for your class based component,

> In class based components we used to create state like this.state.'state' is a reserved word over here, you use this.state. state here is basically a big whole object which contains the state variables.

this.state = {
count: 0
}

> this state variable is a big object which contains all the state variables that you create.

> Let us see how can we update the state variables inside our class Based Components!!


> How react works behind the scenes whenever the state variables are changed ?? ==> So whenever React will see okay, the button was clicked, this.setState({}) was called, react will take this object that you passed inside this.setState(), suppose there are so many counts like count1, count2, count3 and so on ....,Suppose there is 10 different state variables, but if you are sending only 2 state variables inside this object, react will only update those 2 state variables without touching all of them. this state variable is a big object.react will not touch the other state variables.

> Whenever this onClick button is clicked, react will re-trigger that reconcilliation process, it will find the diff of that object, it will update the state variables and then it will re-render that component.


## LifeCycle Of the ClassBased Components (Very Very Very Important for the Interview perspective) ==>



> you can use the word Loading, you can use the word mounting these are basically one and the same things.When I say Loading, it means I am mounting the component onto the web page.


> Whenever this AboutUser component is rendered onto the webpage or mounted onto the web page, so it basically starts rendering this JSX and whenever it starts rendering,and it sees there is a UserDetailsClass component over there, so what happens is this AboutUser parent component is mounted and as soon as it sees there is a UserDetailsClass component, so it starts to load UserDetailsClass component now.AboutUser component is the parent component,and UserDetailsClass inside this AboutUser component, so when you load this AboutUser component onto the web page or you rendered it, so basically React goes line by line and it sees Oh! there is a class Based compoent,so React starts loading this class Based component, so react goes to this class Based component, now a new instance of this class is created and what happens when this class is called or this class is instantiated ???? So what happens is a constructor is called.


> First thing when the class loads is a constructor is called.When I say class loads that means I am creating a new instance of the class, whenever a class is instantiated, the constructor is called.

> Once the constructor is called, then the render() is called

> First Constructor, then render.

> Now what I will do is I will make the AboutUser functional component a class based component.

> So what will happen is when the About component will be loaded,which is basically the parent component,first of all About component is initialised a new instance of this class is created, so the contructor of the parent is called then the render of the parent is called and then it goes to the children class and then it again trigerrs the cycle and now the constructor of this child will be called and then the render of this child will be called.

> Parent constructor ==> Parent render ==> Child constructor ==> Child render


> like constructor and render method class based components have one more very important method which is known as componentDidMount().This is another method which class based components give to us.So basically when this component is loaded, first of all the constructor is called, then the render method is called and once this classBased component is mounted onto the DOM, once it is there onto the DOM then this componentDidMount() method is called.This is basically the life Cycle of this React Component.it will be called when the component is already mounted onto the webpage.


> Suppose if i had componentDidMount() method inside my parent also ???

> So when this About Component will be loaded, so what will happen is parent constructor will be called, then the Parent render will be called and when the component is rendering, so it will render this, it will go to this classBased component children, so it has not yet finished mounting,it will go to the children class Based component and it will first of all trigger it's life cycle method.Parent component has not finished rendering yet,so it will just go to the classbased component and it will trigger this classbased component's life cycle.


> now classbased component's constructor will be called and then this  children render will be called and then the children componentDidMount() method will be called and once the children has been mounted properly, then the parent's componentDidMount() will be called.


> so this parent componentDidMount() is called once the parent component has been completed mounted onto the web Page.


> componentDidMount() is used for making the API Calls.

> in functional components we used to make an api call inside the useEffect() Hook.

> so basically If I want to make an api call, I will first of all render my component, constructor will be called, render will be called, now my component has been rendered,now I will make an api call.


