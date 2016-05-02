'use strict';
const yenv = require('../../lib/yenv');
const path = require('path');
const catchError = require('../_helpers/catchError');

const fixture = file => path.join(__dirname, '../fixtures/importing', file);

describe('yenv', function() {
  describe('importing', function() {
    it('imports and merges the files', function() {
      const actual = yenv(fixture('importing.yaml'), { env: 'development', envObject: {} });

      expect(actual.I_WIN).to.equal('importing');
      expect(actual.IMPORTED1).to.equal('dev');
      expect(actual.IMPORTED2).to.equal('dev');
    });

    it('prevents circular imports', function() {
      const err = catchError(() => yenv(fixture('circular-importer.yaml')));
      err.message.should.contain('Circular import');
      err.message.should.contain('circular-importer.yaml');
      err.message.should.contain('circular-imported.yaml');
    });
  });
});