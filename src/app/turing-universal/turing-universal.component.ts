import { Component } from '@angular/core';
import { TuringMachineService } from '../turing-machine.service';

@Component({
  selector: 'app-turing-universal',
  templateUrl: './turing-universal.component.html',
  styleUrls: ['./turing-universal.component.scss']
})
export class TuringUniversalComponent {
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

  resetMachine() {
    this.states = '';
    this.alphabet = '';
    this.initialState = '';
    this.acceptanceStates = '';
    this.transitionsInput = '';
    this.input = '';
    this.executionSteps = [];
  }
}
