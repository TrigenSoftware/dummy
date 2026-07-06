# dummy

A dummy single-package pnpm project to test [simple-release](https://github.com/TrigenSoftware/simple-release) flows in real conditions.

- Project type: [`@simple-release/pnpm#PnpmProject`](https://github.com/TrigenSoftware/simple-release/tree/main/packages/pnpm#readme)
- Release automation: [simple-release-action](https://github.com/TrigenSoftware/simple-release-action)
- Publishes `@trigensoftware/dummy-foo` to GitHub Packages
- Maintenance branches are enabled in [`.simple-release.json`](.simple-release.json)

## Test scenarios

### Regular release

Push a `feat: ...` or `fix: ...` commit to `main`. The action creates or updates a release pull request. Merge it to tag, publish to GitHub Packages, and create a GitHub release.

### Manual release (version bump form)

Actions → Release → Run workflow. Fill in `version`, `as`, or `prerelease` to force the bump. The release pull request will be created or updated accordingly.

### Options via pull request comment

Comment on an open release pull request:

````md
!simple-release/set-options

```json
{
  "bump": {
    "prerelease": "alpha"
  }
}
```
````

### Snapshot release

Actions → Snapshot → Run workflow. Publishes a temporary snapshot version (timestamped prerelease) to GitHub Packages under the given npm tag without committing anything.

### Maintenance branches

Release a new major (e.g. `1.x` → `2.0.0`) — a `v1` maintenance branch is created from the previous release tag. Then push a `fix: ...` commit to `v1` — the release pull request will target `v1` and the release will be published from it.
