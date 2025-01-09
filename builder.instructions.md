# Builder instructions

> Prompt to be used with `Cursor Composer` in _agent_ mode with `Claude Sonnet`

At @builder.md, you can find a list of stages for building a new application's foundations. 

Your goal is to generate a plan to fulfill it stage by stage. 

To do so, create a new file for each stage and call it stage-number-name. plan.md In each file, write MECE instructions for an agent (or a human) to complete the work. 

Sort the instructions to be executed in the proper order. Group-related instructions to be easily understood. Write the content using Markdown in a way that can be used as a prompt and is also easy to read for humans.

At the end of each plan include a changelog section with a set of instructions for the agent to write or update documentation, including a summary of the agent work and conventional commit messages.
