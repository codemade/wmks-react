import React from "react/addons";

import {
  Appear, BlockQuote, Cite, CodePane, Deck, Fill,
  Heading, Image, Layout, Link, ListItem, List, Quote, Slide, Text
} from "../src/spectacle";

import preloader from "../src/utils/preloader";

import MinionBill from "./components/minion-bill.react.js";
import MinionJerry from "./components/minion-jerry.react.js";
import MinionEvil from "./components/minion-evil.react.js";

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
  apocalypse: require("./img/apocalypse.jpg"),
  zen: require("./img/zen.jpg"),
  superheroic: require("./img/superheroic.jpg"),
  magic: require("./img/magic.gif"),
  oneWay: require("./img/oneWay.jpg"),
  parentToChild: require("./img/parentToChild.jpg"),
  composable: require("./img/composable.jpg"),
  reusableBg: require('./img/reusableBg.jpg'),
  testable: require('./img/testable.jpg'),
  painting: require('./img/painting.jpg'),
  reese: require('./img/reese.jpg')
};

const styles = {
  codemade: {width: "60px", marginTop: "-20px", filter: "grayscale(1) invert(1) contrast(1)"},
  avatar: { width: "200px", borderRadius: "100px", border: "6px double white" },
  iconTwitter: {width: "40px", verticalAlign: "middle", marginRight: "20px"},
  iconGithub: {width: "30px", verticalAlign: "middle"},
  superheroic: {backgroundColor:'rgba(153,0,0,0.5)'}
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
                A JavaScript library for creating user interfaces
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
            <BlockQuote>
              <Quote>
                How to build applications with data, that changes over time?
              </Quote>
            </BlockQuote>
          </Appear>
        </Slide>
        

        <Slide transition={["slide"]} bgImage={images.apocalypse} bgDarken={0.75}>
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


        <Slide bgImage={images.apocalypse} bgDarken={0.75}>
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


        <Slide transition={["slide"]} bgImage={images.zen} bgDarken={0.75}>
          <Heading size={1} fit textColor="quartary" textFont="secondary">
            The Zen of React JS
          </Heading>
          <br />
          <Appear>
            <Heading size={2}>
              #Everything
            </Heading>
          </Appear>
        </Slide>
        <Slide bgImage={images.zen} bgDarken={0.75}>
          <Heading size={1} fit textColor="quartary" textFont="secondary">
            The Zen of React JS
          </Heading>
          <br />
          <Heading size={2}>
            #is
          </Heading>
        </Slide>
        <Slide bgImage={images.zen} bgDarken={0.75}>
          <Heading size={1} fit textColor="quartary" textFont="secondary">
            The Zen of React JS
          </Heading>
          <br />
          <Heading size={2}>
            #a
          </Heading>
        </Slide>
        <Slide bgImage={images.zen} bgDarken={0.75}>
          <Heading size={1} fit textColor="quartary" textFont="secondary">
            The Zen of React JS
          </Heading>
          <br />
          <Heading size={2}>
            #component
          </Heading>
        </Slide>

        <Slide transition={["slide"]} bgImage={images.zen} bgDarken={0.75}>
          <Heading size={1} fit textColor="quartary" textFont="secondary">
            The Zen of React JS
          </Heading>
          <br />
          <BlockQuote>
            <Quote>
              Break down the UI in components
            </Quote>
          </BlockQuote>
        </Slide>



        <Slide transition={["slide"]} bgColor="#e74c3c">
          <Heading size={1} fit textColor="white" textFont="secondary">
            What you do NOT get
          </Heading>
        </Slide>
        <Slide bgColor="#e74c3c">
          <Heading size={2} textColor="white">
            # (View) Model
          </Heading>
        </Slide>
        <Slide bgColor="#e74c3c">
          <Heading size={2} textColor="white">
            # Data Binding
          </Heading>
        </Slide>
        <Slide bgColor="#e74c3c">
          <Heading size={2} textColor="white">
            # Global Events
          </Heading>
        </Slide>
        <Slide bgColor="#e74c3c">
          <Heading size={2} textColor="white">
            # Dependency Injection
          </Heading>
        </Slide>
        <Slide transition={["slide"]} bgImage={images.superheroic} bgDarken="0.3">
          <Heading size={2} textColor="white">
            # a superheroic framework for building web applications
          </Heading>
        </Slide>




        <Slide transition={["slide"]} bgColor="#e74c3c">
          <Heading size={2} textColor="white">
            # MAGIC
          </Heading>
          <Image src={images.magic} width="800"/>
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
              <Image src={images.seriously} />
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


        <Slide transition={["slide"]} bgImage={images.composable} bgDarken="0.7">
          <Heading size={1} fit textColor="white" textFont="secondary">
            Composable
          </Heading>
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

        <Slide transition={["slide"]} bgImage={images.reusableBg} bgDarken="0.7">
          <Heading size={1} fit textColor="white" textFont="secondary">
            Reusable
          </Heading>
          <Appear>
            <Text fit textColor="secondary">
              Means: You can reuse them
            </Text>
          </Appear>
          <Appear>
            <Image src={images.reusable} height="300px" />
          </Appear>
        </Slide>

        <Slide transition={["slide"]} bgImage={images.testable} bgDarken="0.7">
          <Heading size={1} fit textColor="white" textFont="secondary">
            Unit testable
          </Heading>
        </Slide>

        <Slide transition={["slide"]} bgImage={images.oneWay} bgDarken="0.7">
        <Heading size={1} fit textColor="quartary" textFont="secondary">
            Data Flow
          </Heading>
        </Slide>

        <Slide transition={["slide"]} bgImage={images.parentToChild} bgDarken="0.7">
        <Heading size={1} fit textColor="quartary" textFont="secondary">
            # From parent to child
          </Heading>
        </Slide>

        <Slide transition={["slide"]} bgImage={images.parentToChild} bgDarken="0.7">
          <CodePane
          lang="javascript"
          source={require("raw!./snippets/parentComponent.example")}
          margin="20px auto"/>
        </Slide>

        <Slide transition={["slide"]} bgImage={images.parentToChild} bgDarken="0.7">
          <CodePane
          lang="javascript"
          source={require("raw!./snippets/parentComponent.example")}
          margin="20px auto"/>
          <CodePane
          lang="javascript"
          source={require("raw!./snippets/childComponent.example")}
          margin="20px auto"/>
          <Appear>
            <Heading size={2} fit>
              Props are immutable
            </Heading>
          </Appear>
        </Slide>

        <Slide transition={["slide"]} bgImage={images.parentToChild} bgDarken="0.9">
          <Father />
        </Slide>

        <Slide transition={["slide"]} bgImage={images.parentToChild} bgDarken="0.9">
          <CodePane
          lang="javascript"
          source={require("raw!./snippets/father.example")}
          margin="20px auto"/>
          <CodePane
          lang="javascript"
          source={require("raw!./snippets/son.example")}
          margin="20px auto"/>
          <Appear>
            <Heading size={2} fit>
              State (this.setState(...)) is mutable, it forces your component to rerender.
            </Heading>
          </Appear>
        </Slide>

        <Slide transition={["slide"]} bgImage={images.painting} bgDarken="0.7">
          <Heading size={1} fit textColor="quartary" textFont="secondary">
            Rerendering
          </Heading>
          <Appear>
            <Heading size={2}>
              f(state) => View
            </Heading>
          </Appear>
        </Slide>

        <Slide>
          <Heading size={1} textColor="quartary" textFont="secondary">
            Diffing
          </Heading>
          <br/>
          <Image src={images.reese} />
        </Slide>
      </Deck>
    );
  }
}
