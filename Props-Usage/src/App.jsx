import Student from "./Student";

function App() {
  return (
    <>
    <Student name="Ammu" age={20} isStudent = {true}></Student>
    <Student name="deepu" age={99} isStudent = {false}></Student>
    <Student name="Cheppanu" age="puttale" isStudent = "alavatule"></Student>
    <Student></Student>
    <Student name="Pachuu"></Student>
    </>
  );
}

export default App
