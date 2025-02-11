# Use Playwright

- Use Playwright for e2e testing
- Create one spec file for each feature at `/tests/{{feature number}}_{{feature name}}.spec.ts`
- Use **GWT** pattern for describing the tests.
- Use **AAA** pattern for organizing test code.
- Name variables following this convention: `inputX`, `mockX`, `actualX`, `expectedX`.

# HTML CSS Selectors

- Read the current `src/components` implementation
- Prefer selection by role and content (like a user would do)
- Add any `id`, `role` or `name` attribute to source code to simplify test selections.
