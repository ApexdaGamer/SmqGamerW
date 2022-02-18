// We use class syntax to define our extension object
// This isn't actually necessary, but it tends to look the best

class LoccoBlocks {
  /**
   * Scratch will call this method *once* when the extension loads.
   * This method's job is to tell Scratch things like the extension's ID, name, and what blocks it supports.
   */
  getInfo() {
    return {
      // `id` is the internal ID of the extension
      // It should never change!
      // If you choose to make an actual extension, please change this to something else.
      // Only the characters a-z and 0-9 can be used. No spaces or special characters.
      id: 'loccoblocks',

      // `name` is what the user sees in the toolbox
      // It can be changed without breaking projects.
      name: 'LoccoBlocks',

      blocks: [
        {
          // `opcode` is the internal ID of the block
          // It should never change!
          // It corresponds to the class method with the same name.
          opcode: 'blockfunction',
          blockType: Scratch.BlockType.HAT,
          text: 'to [FNNAME]',
	  arguments: {
	    FNNAME: {
	      type: Scratch.ArgumentType.STRING,
	      defaultValue: 'do something'
	    }
	  }
        }
      ]
    };
  }

  blockfunction(args) {
    return true;
  }
}

// Call Scratch.extensions.register to register your extension
// Make sure to register each extension exactly once
Scratch.extensions.register(new LoccoBlocks());