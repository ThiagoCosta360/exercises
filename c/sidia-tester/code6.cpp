///////////////////////////////////////
//             DESAFIO F             //
//              Corrida              //
///////////////////////////////////////

#include <iostream>
 
using namespace std;
 
int main()
{   
    // Va � a velocidade sua
    // Vb � a velovidade de seu amigo
    // S � a dist�ncia entre os dois
    float Va, Vb, S;
    float result;
    
    //Formata saida de acordo com requisito solicitado no enunciado para 3 digitos decimais
    cout.setf(ios::fixed);
    cout.setf(ios::showpoint);
    cout.precision(2);
    
    // Leitura da distancia e das velocidades
	cin >> S >> Va >> Vb;
	
    while (!cin.eof())
    {
    	// Calculo da distancia sobre a diferen�a de velocidade
	    result = S / (Vb-Va);
	    
		if (result > 0)
	    {
	        cout << "impossivel" << endl;
		}
	    else
	    {
	        cout << -result << endl;
		}
		
	    cin >> S >> Va >> Vb;
	}
 
    return 0;
}
