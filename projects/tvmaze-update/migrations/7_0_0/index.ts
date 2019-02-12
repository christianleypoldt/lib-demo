import { Rule, SchematicContext, Tree, SchematicsException } from '@angular-devkit/schematics';

export default function(): Rule {
  return (tree: Tree, context: SchematicContext) => {
    const pkgPath = '/package.json';
    const buffer = tree.read(pkgPath);
    if (buffer == null) {
      throw new SchematicsException('Could not read package.json');
    }

    const content = buffer.toString();
    const pkg = JSON.parse(content);

    if (pkg === null || typeof pkg !== 'object' || Array.isArray(pkg)) {
      throw new SchematicsException('Error reading package.json');
    }

    if (!pkg.dependencies) {
      pkg.dependencies = {};
    }

    // if (pkg.dependencies['frontal']) {
    //   pkg.dependencies['frontal'] = `2.0.0-beta.1`;
    //   tree.overwrite(pkgPath, JSON.stringify(pkg, null, 2));
    // }

    
    // hmm: det finnes ikke peer-dependencies i consumer-prosjektet...
    // det er consumer prosjektet som endres, ikke dependencies i lib-prosjektet
    // if (!pkg.peerDependencies) {
    //     pkg.peerDependencies = {};
    // }
    // pkg.peerDependencies['@angular/common'] = '^7.0.0-rc.0 || ^7.0.0';
    // pkg.peerDependencies['@angular/core'] = '^7.0.0-rc.0 || ^7.0.0';
    // tree.overwrite(pkgPath, JSON.stringify(pkg, null, 2));

    return tree;
  };
}
