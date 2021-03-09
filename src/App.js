import React, { useEffect } from "react";
import { Switch, Route, useLocation, useHistory, Redirect } from "react-router-dom";
import Home from "./pages/Home";
import { Project1, Project2, Project3, Project4, Project5, Project6, Project7, Project8, Project9, Project10 } from "./pages/Projects";
import Contact from "./pages/Contact";
import { AnimatePresence } from "framer-motion";

const App = () => {
  const location = useLocation();
  let history = useHistory();

  useEffect(() => {
    const handleScrollToElement = (e) => {
      console.log(e.wheelDeltaY);
      const url = window.location.origin + "/";

      const wheelRouter = (after, before) => {
        if (e.wheelDeltaY < 0) {
          setTimeout(() => {
            history.push(after);
          }, 500);
        } else if (e.wheelDeltaY > 0) {
          setTimeout(() => {
            history.push(before);
          }, 500);
        }
      };

      switch (window.location.href.toString()) {
        case url:
          if (e.wheelDeltaY < 0) {
            setTimeout(() => {
              history.push("project-1");
            }, 500);
          }
          break;
        case url + "project-1":
          wheelRouter("project-2", "");
          break;
        case url + "project-2":
          wheelRouter("project-3", "project-1");
          break;
        case url + "project-3":
          wheelRouter("project-4", "project-2");
          break;
        case url + "project-4":
          wheelRouter("project-5", "project-3");
          break;
        case url + "project-5":
          wheelRouter("project-6", "project-4");
          break;
        case url + "project-6":
          wheelRouter("project-7", "project-5");
          break;
        case url + "project-7":
          wheelRouter("project-8", "project-6");
          break;
        case url + "project-8":
          wheelRouter("project-9", "project-7");
          break;
        case url + "project-9":
          wheelRouter("project-10", "project-8");
          break;
          case url + "project-10":
            wheelRouter("contact", "project-8");
            break;
        case url + "contact":
          if (e.wheelDeltaY > 0) {
            setTimeout(() => {
              history.push("project-4");
            }, 500);
          }
          break;
        default:
          console.log("nothing");
      }
    };
    window.addEventListener("wheel", handleScrollToElement);
  }, [history]);

  return (
    <AnimatePresence>
      <Switch location={location} key={location.pathname}>
        <Route exact path="/" component={Home} />
        <Route path="/project-1" component={Project1} />
        <Route path="/project-2" component={Project2} />
        <Route path="/project-3" component={Project3} />
        <Route path="/project-4" component={Project4} />
        <Route path="/project-5" component={Project5} />
        <Route path="/project-6" component={Project6} />
        <Route path="/project-7" component={Project7} />
        <Route path="/project-8" component={Project8} />
        <Route path="/project-9" component={Project9} />
        <Route path="/project-10" component={Project10} />
        <Route path="/contact" component={Contact} />
        <Redirect to='/' />
      </Switch>
    </AnimatePresence>
  );
};

export default App;