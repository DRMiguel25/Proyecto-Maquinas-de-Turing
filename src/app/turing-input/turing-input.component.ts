import { Component } from '@angular/core';
import { TuringMachineService } from '../turing-machine.service';

@Component({
  selector: 'app-turing-input',
  templateUrl: './turing-input.component.html',
  styleUrls: ['./turing-input.component.scss']
})
export class TuringInputComponent {
  states: string = '';
  alphabet: string = '';
  initialState: string = '';
  acceptanceStates: string = '';
  transitionsInput: string = '';
  input: string = '';
  executionSteps: any[] = [];

  constructor(private turingService: TuringMachineService) {}

  onSubmit() {
    const config = {
      states: this.states.split(',').map(state => state.trim()),
      alphabet: this.alphabet.split(',').map(symbol => symbol.trim()),
      initialState: this.initialState.trim(),
      acceptanceStates: this.acceptanceStates.split(',').map(state => state.trim()),
      transitions: this.transitionsInput.split('\n').map(line => {
        const [currentState, readSymbol, nextState, writeSymbol, moveDirection] = line.split(',').map(item => item.trim());
        return { currentState, readSymbol, nextState, writeSymbol, moveDirection: moveDirection as 'L' | 'R' };
      })
    };

    this.executionSteps = this.turingService.simulate(config, this.input);
  }
}
