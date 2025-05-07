# Explain the difference between any, unknown, and never types in TypeScript
TypeScript is a strongly typed compiler language, but we can use daynamic typing like javaScript but not recommended. I will explain three types of TypeScript that we all should know.

any: In this type we can avoid type checking for the input.
unknow: It is alternative to any type in TS, we can use for more safer option.
never: we are use this type is error checking whcih will never return something.

# What is the use of enums in TypeScript? Provide an example of a numeric and string enum.
Enum is name constant the we can declare. In enum type we can pre declate the constant value for a specific variable.

```
enum CORD {
  UP = 1,
  DOWN = -1,
  LEFT = -1,
  RIGHT = 1,
}

const moveNegetiveX: CORD = CORD.LEFT;
```
