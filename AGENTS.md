<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

## App conventions
- Keep the sales experience as one scrolling index route with reusable presentation components; the reference is a single continuous sales page.
- Keep purchase destinations in a dedicated sales configuration; missing links must not simulate a completed purchase.
- Use semantic global tokens for the reference palette and Button variants for sales actions; this preserves consistent presentation.
