import React from "react/addons";

import {
  Appear, BlockQuote, Cite, CodePane, Deck, Fill,
  Heading, Image, Layout, Link, ListItem, List, Quote, Slide, Text
} from "../src/spectacle";

import preloader from "../src/utils/preloader";

import Minion from "./components/minion.react.js";
import MinionMoodChanger from "./components/minionMoodChanger.react.js";

import Father from './components/catFather.react.js';

const images = {
  react: require("./img/react.svg"),
  codemade: require("./img/codemade.png"),
  chrkhl: require("./img/chrkhl.png"),
  revrng: require("./img/revrng.png"),
  twitter: require("./img/twitter.svg"),
  github: require("./img/github.svg"),
  lego: require("./img/lego.svg"),
  seriously: require("./img/seriously.png"),
  reusable: require("./img/reusable.jpg"),
  apocalypse: require("./img/damage.jpg"),
  zen: require("./img/zen.jpg"),
  superheroic: require("./img/superheroic.jpg"),
  magic: require("./img/magic.gif"),
  oneWay: require("./img/oneway.jpg"),
  parentToChild: require("./img/parentToChild.jpg"),
  composable: require("./img/lego.jpg"),
  reusableBg: require("./img/recycling.jpg"),
  testable: require("./img/crashtest.jpg"),
  painting: require("./img/painting.jpg"),
  reeseWith: require("./img/reese-with.jpg"),
  reeseWithout: require("./img/reese-without.jpg"),
  surprised: require("./img/surprised.jpg"),
  chuck: require("./img/chuck.jpg"),
  applause: require("./img/applause.gif"),
  vdom: require("./img/vdom.jpg")
};

const styles = {
  codemade: {width: "60px", marginTop: "-20px", filter: "grayscale(1) invert(1) contrast(1)"},
  avatar: { width: "200px", borderRadius: "100px", border: "6px double white" },
  iconTwitter: {width: "40px", verticalAlign: "middle", marginRight: "20px"},
  iconGithub: {width: "30px", verticalAlign: "middle"},
  superheroic: {backgroundColor:"rgba(153,0,0,0.5)"}
};

preloader([images.city, images.kat]);

export default class extends React.Component {
  render() {
    return (
      <Deck transitionDuration={800}>
        <Slide transition={["slide"]}>
          <Heading textSize="12em" lineHeight={0.1} textColor="quartary" textFont="secondary">
            React JS
          </Heading>
          <Image src={images.react} height="300px"/>
          <Text bold caps textColor="secondary">
            Webmontag Kassel, 09. November 2015
          </Text>
        </Slide>

        <Slide transition={["slide"]}>
          <Heading textSize="12em" lineHeight={0.1} textColor="quartary" textFont="secondary">
            codemade<Image src={images.codemade} style={styles.codemade} />
          </Heading>
          <Layout>
            <Fill>
              <Text textColor="secondary">
                <Image src={images.revrng} style={styles.avatar}/>
                <br />
                René Viering
                <br />
                <a href="https://twitter.com/rvrng">
                  <Image src={images.twitter} style={styles.iconTwitter} />
                </a>
                <a href="https://github.com/revrng">
                  <Image src={images.github} style={styles.iconGithub} />
                </a>
              </Text>
            </Fill>
            <Fill>
              <Text textColor="secondary">
                <Image src={images.chrkhl} style={styles.avatar}/>
                <br />
                Christian Kühl
                <br />
                <a href="https://twitter.com/rvrng">
                  <Image src={images.twitter} style={styles.iconTwitter} />
                </a>
                <a href="https://twitter.com/rvrng">
                  <Image src={images.github} style={styles.iconGithub} />
                </a>
              </Text>
            </Fill>
          </Layout>
        </Slide>

        <Slide transition={["slide"]}>
          <Heading size={1} fit textColor="quartary" textFont="secondary">
            What is React JS ?
          </Heading>
          <br />
          <Appear>
            <BlockQuote>
              <Quote>
                A JS library for creating UIs
              </Quote>
            </BlockQuote>
          </Appear>
        </Slide>

        <Slide transition={["slide"]} bgColor="black">
          <Heading size={1} fit textColor="quartary" textFont="secondary">
            Why React JS ?
          </Heading>
          <br />
          <Appear>
            <Text textColor="secondary">
              How to build applications<br />
              with data<br />
              that changes over time?
            </Text>
          </Appear>
        </Slide>

        <Slide transition={["slide"]} bgImage={images.apocalypse} bgDarken={0.75} copyright="flickr photo by xddorox http://flickr.com/photos/bikeman04/14008501053 shared under a Creative Commons (BY) license">
          <Heading size={1} fit textColor="quartary" textFont="secondary">
            The root of all evil
          </Heading>
          <br />
          <Appear>
            <BlockQuote>
              <Quote>
                Data changing over time
              </Quote>
            </BlockQuote>
          </Appear>
        </Slide>

        <Slide bgImage={images.apocalypse} bgDarken={0.75} copyright="flickr photo by xddorox http://flickr.com/photos/bikeman04/14008501053 shared under a Creative Commons (BY) license">
          <Heading size={1} fit textColor="quartary" textFont="secondary">
            The root of all evil
          </Heading>
          <br />
          <BlockQuote>
            <Quote>
              So much STATE in UIs
            </Quote>
          </BlockQuote>
        </Slide>

        <Slide bgImage={images.zen} bgDarken={0.75} copyright="flickr photo by RC Designer http://flickr.com/photos/rcdesigner/4047713072 shared under a Creative Commons (BY) license">
          <Appear>
            <Heading size={1} fit textColor="quartary" textFont="secondary">
              The Zen of React JS
            </Heading>
          </Appear>
          <br />
          <Appear>
            <Heading size={2}>
              #Everything
            </Heading>
          </Appear>
        </Slide>
        <Slide bgImage={images.zen} bgDarken={0.75} copyright="flickr photo by RC Designer http://flickr.com/photos/rcdesigner/4047713072 shared under a Creative Commons (BY) license">
          <Heading size={1} fit textColor="quartary" textFont="secondary">
            The Zen of React JS
          </Heading>
          <br />
          <Heading size={2}>
            #is
          </Heading>
        </Slide>
        <Slide bgImage={images.zen} bgDarken={0.75} copyright="flickr photo by RC Designer http://flickr.com/photos/rcdesigner/4047713072 shared under a Creative Commons (BY) license">
          <Heading size={1} fit textColor="quartary" textFont="secondary">
            The Zen of React JS
          </Heading>
          <br />
          <Heading size={2}>
            #a
          </Heading>
        </Slide>
        <Slide bgImage={images.zen} bgDarken={0.75} copyright="flickr photo by RC Designer http://flickr.com/photos/rcdesigner/4047713072 shared under a Creative Commons (BY) license">
          <Heading size={1} fit textColor="quartary" textFont="secondary">
            The Zen of React JS
          </Heading>
          <br />
          <Heading size={2}>
            #component
          </Heading>
        </Slide>

        <Slide bgImage={images.zen} bgDarken={0.75} copyright="flickr photo by RC Designer http://flickr.com/photos/rcdesigner/4047713072 shared under a Creative Commons (BY) license">
          <Heading textFont="primary" textColor="quartary">
            Break down the UI in components
          </Heading>
        </Slide>

        <Slide transition={["slide"]} bgColor="#e74c3c">
          <Heading size={1} fit textColor="tertiary" textFont="primary">
            What you do NOT get
          </Heading>
        </Slide>
        <Slide bgColor="#e74c3c" bgImage={images.superheroic} >
          <Heading size={1} fit textColor="white">
            # (View) Model
          </Heading>
        </Slide>
        <Slide bgColor="#e74c3c" bgImage={images.superheroic} >
          <Heading size={1} fit textColor="white">
            # Data Binding
          </Heading>
        </Slide>
        <Slide bgColor="#e74c3c" bgImage={images.superheroic} >
          <Heading size={1} fit textColor="white">
            # Global Events
          </Heading>
        </Slide>
        <Slide bgColor="#e74c3c" bgImage={images.superheroic} >
          <Heading size={1} fit textColor="white">
            # Dependency Injection
          </Heading>
        </Slide>
        <Slide bgColor="#e74c3c" bgImage={images.superheroic} >
          <Heading size={1} fit textColor="white">
            # no superheroic framework
          </Heading>
        </Slide>

        <Slide bgColor="#e74c3c" bgImage={images.superheroic} >
          <Heading size={2} textColor="white">
            # NO MAGIC
          </Heading>
          <Image src={images.magic} width="800"/>
        </Slide>

        <Slide bgColor="#27ae60">
          <Heading size={1} fit textColor="white">
            React === 'Just the UI'
          </Heading>
        </Slide>

        <Slide transition={["slide"]}>
          <Heading size={1} fit textColor="quartary" textFont="secondary">
            How does a component look like ?
          </Heading>
          <br />
          <Appear>
            <CodePane
              lang="javascript"
              source={require("raw!./snippets/simple-component.example")}
              margin="20px auto"/>
          </Appear>
          <Appear>
            <Heading size={2}>
              Just JavaScript
            </Heading>
          </Appear>
        </Slide>

        <Slide>
          <Heading size={1} fit textColor="quartary" textFont="secondary">
            How does a component look like ?
          </Heading>
          <br />
          <CodePane
            lang="javascript"
            source={require("raw!./snippets/simple-component-jsx.example")}
            margin="20px auto"/>

          <Appear>
            <Heading size={2} fit>
              JSX makes it more readable.
            </Heading>
          </Appear>
        </Slide>

        <Slide transition={["slide"]}>
          <Heading size={1} textColor="quartary" textFont="secondary">
            JSX
          </Heading>
          <Layout>
            <Fill>
              <Appear>
                <Image src={images.seriously} />
              </Appear>
            </Fill>
            <Fill>
              <List>
                <ListItem><Appear fid="1">optional XML-like syntax</Appear></ListItem>
                <ListItem><Appear fid="2">it is not HTML</Appear></ListItem>
                <ListItem><Appear fid="3">not a templating language</Appear></ListItem>
                <ListItem><Appear fid="3">compiles to JavaScript</Appear></ListItem>
              </List>
            </Fill>
          </Layout>
        </Slide>

        <Slide transition={["slide"]} bgColor="#27ae60">
          <Heading size={1} fit textColor="white" textFont="secondary">
            Components are
          </Heading>
        </Slide>

        <Slide transition={["slide"]} bgImage={images.composable} bgDarken="0.8" copyright="http://de.freeimages.com/photo/play-bricks-1-1624270">
          <Heading size={1} fit textColor="white" textFont="secondary">
            Composable
          </Heading>
          <br />
          <Appear>
            <Text fit textColor="secondary">
              Means: You can compose them
            </Text>
          </Appear>
          <Appear>
            <CodePane
              lang="javascript"
              source={require("raw!./snippets/composable.example")}
              margin="20px auto"/>
          </Appear>
        </Slide>

        <Slide transition={["slide"]} bgImage={images.reusableBg} bgDarken="0.7" copyright="flickr photo by James Cridland http://flickr.com/photos/jamescridland/393976062 shared under a Creative Commons (BY) license">
          <Heading size={1} fit textColor="white" textFont="secondary">
            Reusable
          </Heading>
          <br />
          <Appear>
            <Text fit textColor="secondary">
              Means: You can reuse them
            </Text>
          </Appear>
        </Slide>

        <Slide transition={["slide"]} bgImage={images.testable} bgDarken="0.7" copyright="flickr photo by greg westfall. http://flickr.com/photos/imagesbywestfall/3658162161 shared under a Creative Commons (BY) license">
          <Heading size={1} fit textColor="white" textFont="secondary">
            Unit testable
          </Heading>
        </Slide>

        <Slide transition={["slide"]} bgImage={images.oneWay} bgDarken="0.7" copyright="flickr photo by Eric Magnuson https://flic.kr/p/65SvMR shared under a Creative Commons (BY) license">
          <Heading size={1} fit textColor="quartary" textFont="secondary">
            Data Flow
          </Heading>
          <Appear>
            <Heading size={2}>
              One Way
            </Heading>
          </Appear>
        </Slide>

        <Slide copyright="http://www.iconarchive.com/tag/minion">
          <Heading size={4} textColor="secondary">
            # data is passed via props
          </Heading>
          <br />
          <Layout>
            <Fill>
              <Appear>
                <Minion name="Bill" mood="hungry"/>
              </Appear>
            </Fill>
            <Fill>
              <Appear>
                <CodePane
                  lang="javascript"
                  source={require("raw!./snippets/minionProps.example")}
                  margin="20px auto"/>
              </Appear>
            </Fill>
          </Layout>
        </Slide>

        <Slide copyright="http://www.iconarchive.com/tag/minion">
          <Heading size={4} textColor="secondary">
            # from parent to child
          </Heading>
          <br />
          <Layout>
            <Fill>
              <Minion name="Bill" mood="hungry"/>
            </Fill>
            <Fill>
                <CodePane
                  lang="javascript"
                  source={require("raw!./snippets/minionPropChild.example")}
                  margin="20px auto"/>
            </Fill>
          </Layout>
        </Slide>

        <Slide copyright="http://www.iconarchive.com/tag/minion">
          <Heading size={4} textColor="secondary">
            # props are immutable
          </Heading>
          <br />
          <Layout>
            <Fill>
              <Minion name="Bill" mood="hungry"/>
            </Fill>
            <Fill>
                <CodePane
                  lang="javascript"
                  source={require("raw!./snippets/minionPropChild.example")}
                  margin="20px auto"/>
            </Fill>
          </Layout>
        </Slide>

        <Slide copyright="http://www.iconarchive.com/tag/minion">
          <Heading size={4} textColor="secondary">
            # state is mutable
          </Heading>
          <Appear>
            <CodePane
              lang="javascript"
              source={require("raw!./snippets/minionState.example")}
              margin="20px auto"/>
          </Appear>
          <Appear>
            <MinionMoodChanger />
          </Appear>
        </Slide>

        <Slide copyright="http://www.iconarchive.com/tag/minion">
          <Heading size={4} textColor="secondary">
            # setState => re-render component
          </Heading>
          <CodePane
            lang="javascript"
            source={require("raw!./snippets/minionState.example")}
            margin="20px auto"/>
          <MinionMoodChanger />
        </Slide>

        <Slide copyright="http://www.iconarchive.com/tag/minion">
          <Heading size={4} textColor="secondary">
            # pass state via props
          </Heading>
          <CodePane
            lang="javascript"
            source={require("raw!./snippets/minionState.example")}
            margin="20px auto"/>
          <MinionMoodChanger />
        </Slide>

        <Slide transition={["slide"]} bgImage={images.painting} bgDarken="0.7" copyright="flickr photo by John-Morgan http://flickr.com/photos/aidanmorgan/2292579833 shared under a Creative Commons (BY) license">
          <Heading size={1} fit textColor="quartary" textFont="secondary">
            Re-Rendering
          </Heading>
          <Heading size={2}>
            f(state) => View
          </Heading>
        </Slide>

        <Slide transition={["slide"]} bgColor="#27ae60">
            <Heading size={1} textColor="white" textFont="secondary" fit>
              Components ≙ Functions
            </Heading>
            <br/>
            <Appear>
              <BlockQuote>
                <Quote>
                  Simple functions
                  <Appear>that take in props & state</Appear>
                  <Appear>and render HTML</Appear>
                </Quote>
              </BlockQuote>
            </Appear>
        </Slide>

        <Slide transition={["slide"]} bgColor="#27ae60">
          <Heading size={1} fit textColor="white" textFont="secondary">
            Easy to reason about!
          </Heading>
        </Slide>

        <Slide>
          <Heading size={1}>
            When state changes
          </Heading>
          <br />
          <Appear>
            <BlockQuote>
              <Quote>
                React will render
                <Appear caps>EVERYTHING</Appear>
                <Appear>from scratch</Appear>
              </Quote>
            </BlockQuote>
          </Appear>
        </Slide>

        <Slide bgImage={images.surprised} bgDarken="0.6" copyright="http://www.thenerdmag.com/wp-content/uploads/2015/08/Meme-Cat-Surprised.jpg">
          <Appear>
            <Heading size={1} fit>
              Everything?
            </Heading>
          </Appear>
        </Slide>

        <Slide bgImage={images.surprised} bgDarken="0.6" copyright="http://www.thenerdmag.com/wp-content/uploads/2015/08/Meme-Cat-Surprised.jpg">
          <Heading size={1} fit caps>
            Everything!
          </Heading>
        </Slide>

        <Slide bgImage={images.surprised} bgDarken="0.6" copyright="http://www.thenerdmag.com/wp-content/uploads/2015/08/Meme-Cat-Surprised.jpg">
            <Heading size={2}>
              What about...
            </Heading>
            <br />
            <Appear>
              <Heading size={1}>
                DOM?
              </Heading>
            </Appear>
        </Slide>

        <Slide>
          <Image src={images.chuck} />
        </Slide>

        <Slide transition={["slide"]} bgColor="#27ae60">
          <Heading size={2} fit textColor="white">
            Solution:
          </Heading>
          <Appear>
            <Heading size={1}>
               Virtual DOM!
            </Heading>
          </Appear>
        </Slide>

        <Slide transition={["slide"]}>
          <Heading size={1} fit>
            on every change
          </Heading>
        </Slide>

        <Slide>
          <Heading size={1} fit textColor="quartary">
            Create a whole
          </Heading>
          <br />
          <Appear>
            <Heading size={1} fit>
              virtual DOM
            </Heading>
          </Appear>
          <br />
          <Appear>
            <Heading size={1} fit textColor="quartary">
              from scratch
            </Heading>
          </Appear>
        </Slide>

        <Slide>
          <Heading size={1} fit textFont="secondary" textColor="secondary">
            in the background
          </Heading>
        </Slide>

        <Slide>
          <Heading size={2} textFont="secondary" textColor="quartary">
            Spot the differences
          </Heading>
          <br/>
          <Appear>
            <Layout>
              <Fill>
                <Image src={images.reeseWith} />
                <Appear>
                  <Text textColor="secondary">
                    Reese Witherspoon
                  </Text>
                </Appear>
              </Fill>
              <Fill>
                <Image src={images.reeseWithout} />
                <Appear>
                  <Text textColor="secondary">
                    Reese Withoutherspoon
                  </Text>
                </Appear>
              </Fill>
            </Layout>
          </Appear>
        </Slide>

        <Slide>
          <Heading size={2} textFont="secondary" textColor="quartary">
            Spot the differences
          </Heading>
          <br />
          <br />
          <br />
          <Appear>
            <Heading size={2} textColor="secondary">
              between the DOM and the Virtual DOM
            </Heading>
          </Appear>
        </Slide>

        <Slide transition={["slide"]}>
          <Heading size={1} fit textColor="tertiary">
            ...and re-render only parts<br />in the real DOM
          </Heading>
          <Appear>
            <Heading size={1} fit textColor="quartary">
              that changed
            </Heading>
          </Appear>
        </Slide>

        <Slide copyright="http://maerch.github.io/img/react-vdom/vdom.jpg">
          <Image src={images.vdom}/>
        </Slide>

        <Slide bgColor="#27ae60">
          <Heading size={1} fit textColor="white">
            Virtual DOM makes
            <br />
            re-rendering
            <br/>
            on every change fast
          </Heading>
        </Slide>

        <Slide bgColor="#27ae60">
          <Heading size={1} fit textColor="white">
            because the DOM
            <br />
            is slow
            <br/>
            but JS ist fast.
          </Heading>
        </Slide>

        <Slide>
          <Heading size={1} fit textFont="secondary" textColor="quartary">
            Summary
          </Heading>
        </Slide>

        <Slide>
          <Heading size={1} fit textColor="secondary">
            Everything is<br />a component
          </Heading>
        </Slide>

        <Slide>
          <Heading size={1} fit textColor="secondary">
            Re-Render completely<br />when state changes
          </Heading>
        </Slide>

        <Slide>
          <Heading size={1} fit textColor="secondary">
            Virtual DOM<br />is simple and fast
          </Heading>
        </Slide>

        <Slide>
          <Heading size={1} fit textColor="secondary">
            React has no magic
          </Heading>
        </Slide>

        <Slide bgImage={images.applause} bgDarken="0.6">
          <Heading size={1} fit textColor="quartary">
            YaY!<br />We can render components.
          </Heading>
          <br />
          <Appear>
          <Heading size={1} fit>
            And now?
          </Heading>
          </Appear>
          <Appear>
            <Heading size={2}>
              to be continued...
            </Heading>
          </Appear>
        </Slide>

      </Deck>
    );
  }
}
