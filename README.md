# 3214324324324
1. 50% danych w S3 Standard nieużywane

Rozwiązanie: przenieść do Glacier / IA
Oszczędność: ~140 USD/mies.

2. Brak lifecycle policies

Rozwiązanie: automatyczne przenoszenie/usuwanie danych
Oszczędność: ~350 USD/mies.

3. Multi-region replication wszystkiego (także logów)

Rozwiązanie: wyłączyć replikację logów i danych niekrytycznych
Oszczędność: ~500 USD/mies.

4. Versioning  - 50 wersji plików

Rozwiązanie: usuwać stare wersje po 30 dniach
Oszczędność: ~400 USD/mies.

5. Stare snapshoty EBS (200 GB)

Rozwiązanie: usunąć
Oszczędność: ~10 USD/mies.

SUMA OSZCZĘDNOŚCI: ~1,400–1,650 USD/mies.

