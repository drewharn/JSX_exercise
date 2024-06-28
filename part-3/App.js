function App() {
    return (
        <div>
            <Person
              name="Homer"
              age={38}
              hobbies={["bowling", "watching tv", "drinking beer"]}
            />
            <Person 
              name="Marge"
              age={34}
              hobbies={["painting", "gambling"]} />
            <Person
              name="Bart"
              age={10}
              hobbies={["skateboarding", "general mischief"]}
            />
            <Person
              name="Lisa"
              age={8}
              hobbies={["vegetarianism", "saxophone", "science"]}
            /> 
        </div>
    );
}