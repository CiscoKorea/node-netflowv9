var expect = require('chai').expect;

var NetFlowV9 = require('../netflowv9');

var VYOS_PACKET = '000900070002549b53b289a200000001000000000000005c0400001500150004001600040001000400020004003c0001000a0002000e0002003d00010003000400080004000c000400070002000b00020005000100060001000400010038000600500006003a000200c90004003000010000005c0401001500150004001600040001000400020004003c0001000a0002000e0002003d00010003000400080004000c000400070002000b00020005000100060001000400010051000600390006003b000200c90004003000010000005c0800001500150004001600040001000400020004003c0001000a0002000e0002003d000100030004001b0010001c00100005000100070002000b000200060001000400010038000600500006003a000200c90004003000010000005c0801001500150004001600040001000400020004003c0001000a0002000e0002003d000100030004001b0010001c00100005000100070002000b000200060001000400010051000600390006003b000200c90004003000010001001a10000004000c000100040030000100310001003200041000000e000000000102000001f4040000400000209e0000209e0000002800000001040003000000000000000a640054c0004c0264aa0050001006001b2fb9484980ee7395562800000000000301';



describe('NetFlowV9', function () {

    it('should be a function', function (done) {
        expect(NetFlowV9).to.be.an('function'); //is actually a constructor
        done();
    });

    it('should have nfPktDecode', function (done) {
        expect(NetFlowV9).to.have.property('nfPktDecode');
        done();
    });

    describe('nfPktDecode', function () {
        it('should be able to decode vyos packet', function (done) {
            var buffer = new Buffer(VYOS_PACKET, 'hex');
            expect(buffer).to.have.length(VYOS_PACKET.length/2);
            var r = NetFlowV9.nfPktDecode(buffer);
            console.log("asdf", r);
            done();
        });
    });

});